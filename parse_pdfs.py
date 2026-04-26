import sys
import os
from pypdf import PdfReader

for pdf_file in [" 補助診断②.pdf", "主要検査pdf.pdf", "補助診断①.pdf"]:
    if not os.path.exists(pdf_file):
        print(f"Skipping {pdf_file}, not found.")
        continue
        
    try:
        reader = PdfReader(pdf_file)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        
        out_name = pdf_file.replace(".pdf", ".txt")
        with open(out_name, "w", encoding="utf-8") as f:
            f.write(text)
        print(f"Successfully extracted {pdf_file} to {out_name}")
    except Exception as e:
        print(f"Error reading {pdf_file}: {e}")
