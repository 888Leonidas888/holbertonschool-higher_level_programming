#!/usr/bin/python3
import MySQLdb
import sys


def main():
    db = MySQLdb.connect(
        host="localhost",
        user=sys.argv[1],
        password=sys.argv[2],
        port=3306,
        database=sys.argv[3],
    )
    r = db.cursor()
    r.execute("""SELECT * FROM states ORDER BY id ASC""")
    rows = r.fetchall()

    for row in rows:
        print(row)

    r.close()
    db.close()


if __name__ == "__main__":
    main()
