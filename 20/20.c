#include <stdio.h>

/* A __VERY__ inefficient solution */

int main(int argc, char *argv[])
{
  long limit = 33100000;
  long house = 1;
  long max = 0;
  int presents, i = 0;
  int cond = 1;
  do {
    presents = 0;
    for (i = house; i > 0; --i) {
      if (house % i == 0) {
        presents += i * 10;
      }
    }
    if (presents >= limit) {
      printf("Part 1: house no %ld\n", house);
      cond = 0;
    }
    ++house;
  } while (cond == 1);
  return 0;
}