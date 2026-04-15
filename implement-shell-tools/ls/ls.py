import sys
import os
import argparse

parser = argparse.ArgumentParser(prog='ls')
parser.add_argument('directory', nargs='?', default='.')
parser.add_argument('-1', action='store_true', dest='one')
parser.add_argument('-a', action='store_true', help='Include hidden files')

args = parser.parse_args()

try:
    entries = os.listdir(args.directory)
except FileNotFoundError:
    print(f'ls: {args.directory}: No such file or directory', file=sys.stderr)
    sys.exit(1)

if not args.a:
    entries = [e for e in entries if not e.startswith('.')]
else: 
    entries = ['.', '..'] + entries

entries.sort()

for entry in entries:
    print(entry)