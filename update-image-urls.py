#!/usr/bin/env python3
"""
DECORA3D — Image URL Updater for Shopify CSV Import
====================================================
After uploading placeholder SVGs to Shopify (Settings → Files),
run this script to replace REPLACE_WITH_CDN in the CSV
with your actual Shopify CDN URLs.

Usage:
  python3 update-image-urls.py

The script reads image_cdn_urls.json (you fill this in) and updates
shopify-products-import.csv automatically.
"""

import csv, json, sys, os

CSV_PATH = "shopify-products-import.csv"
URLS_PATH = "image_cdn_urls.json"
OUT_PATH  = "shopify-products-FINAL.csv"

if not os.path.exists(URLS_PATH):
    # Create a template file for the user to fill in
    with open("data/shopify-products-import.csv") as f:
        reader = csv.DictReader(f)
        handles = []
        for row in reader:
            if row.get("Image Src","").startswith("REPLACE_WITH_CDN"):
                fname = row["Image Src"].split("/")[-1]
                handle = row["Handle"]
                handles.append({"handle": handle, "filename": fname, "cdn_url": ""})

    template = {
        "_instructions": [
            "1. Upload all SVG files from assets/images/ to Shopify Admin → Settings → Files",
            "2. For each file, click the file to copy its CDN URL (starts with cdn.shopify.com)",
            "3. Paste each URL in the cdn_url field below",
            "4. Save this file, then run: python3 update-image-urls.py"
        ],
        "images": handles
    }

    with open(URLS_PATH, "w") as f:
        json.dump(template, f, indent=2)

    print(f"✅ Template created: {URLS_PATH}")
    print("   Fill in the cdn_url values, then run this script again.")
    sys.exit(0)

# Load the URL map
with open(URLS_PATH) as f:
    url_data = json.load(f)

url_map = {
    item["handle"]: item["cdn_url"]
    for item in url_data.get("images", [])
    if item.get("cdn_url")
}

if not url_map:
    print("❌ No cdn_url values found in image_cdn_urls.json yet.")
    print("   Please fill in the CDN URLs and run again.")
    sys.exit(1)

# Update the CSV
updated = 0
rows_out = []
with open(f"data/{CSV_PATH}") as f:
    reader = csv.DictReader(f)
    fieldnames = reader.fieldnames
    for row in reader:
        if row.get("Image Src","").startswith("REPLACE_WITH_CDN"):
            handle = row["Handle"]
            if handle in url_map:
                row["Image Src"] = url_map[handle]
                updated += 1
        rows_out.append(row)

with open(f"data/{OUT_PATH}", "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(rows_out)

print(f"✅ Done! Updated {updated} image URLs.")
print(f"   Final CSV saved to: data/{OUT_PATH}")
print(f"   Now import data/{OUT_PATH} into Shopify → Products → Import")
