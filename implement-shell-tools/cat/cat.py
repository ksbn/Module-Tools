import sys
import argparse

parser = argparse.ArgumentParser(prog='cat')
parser.add_argument('files', nargs='+')
parser.add_argument('-n', action='store_true', help='Number all lines')
parser.add_argument('-b', action='store_true', help='Number non-empty lines')

args = parser.parse_args()

for file in args.files:
    try:
        with open(file, 'r') as f:
            lines = f.readlines()

        line_number = 1

        for i, line in enumerate(lines):
            is_last_empty = (i == len(lines) - 1 and line == '\n' and len(lines) > 1)
            stripped = line.rstrip('\r\n')

            if args.b:
                if stripped != '':
                    print(f'{line_number:>6}\t{stripped}')
                    line_number += 1
                else:
                    print('')
            elif args.n:
                if not is_last_empty:
                    print(f'{line_number:>6}\t{stripped}')
                    line_number += 1
            else:
                if not is_last_empty:
                    print(stripped)

    except FileNotFoundError:
        print(f'cat: {file}: No such file or directory', file=sys.stderr)