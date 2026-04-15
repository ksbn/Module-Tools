import sys
import os
import argparse

parser = argparse.ArgumentParser(prog='wc')
parser.add_argument('files', nargs='+')
parser.add_argument('-l', action='store_true', help='Count lines')
parser.add_argument('-w', action='store_true', help='Count words')
parser.add_argument('-c', action='store_true', help='Count bytes')

args = parser.parse_args()

results = []
total_lines = total_words = total_chars = 0

for file in args.files:
    try:
        with open(file, 'r') as f:
            content = f.read()

        lines = len(content.splitlines())
        words = len(content.split())
        chars = len(content.encode('utf-8'))

        total_lines += lines
        total_words += words
        total_chars += chars

        results.append((lines, words, chars, file))
    except FileNotFoundError:
        print(f'wc: {file}: No such file or directory', file=sys.stderr)

width = 8

def format_row(l, w, c, name):
    if args.l:
        return f'{l:>{width}} {name}'
    elif args.w:
        return f'{w:>{width}} {name}'
    elif args.c:
        return f'{c:>{width}} {name}'
    else:
        return f'{l:>{width}}{w:>{width}}{c:>{width}} {name}'

for lines, words, chars, file in results:
    print(format_row(lines, words, chars, file))

if len(results) > 1:
    print(format_row(total_lines, total_words, total_chars, 'total'))