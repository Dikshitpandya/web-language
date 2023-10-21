//write out to program to zodiac sigh of user
// check ---------zodiac sigh with date of birth

#include<stdio.h>
void main()
{
   int month, day;

   printf("enter your birth_month");
   scanf("%d",&month);
   printf("enter your birth_day");
   scanf("%d", &day);
  
     if((month <= 12) ||( month >= 01))
     {
       printf("your enter month that not vallid");
     

   if((month == 3 && day >= 21 && day <= 31 ) || (month == 4 && day <=19 && day >= 1 ))
   {
    printf("your zodiac sign is Aries and that symbol is the Ram");
   }

   else if((month == 4 && day >= 20 && day <= 30)||(month == 5 && day <=20 && day >= 1))
   {
    printf("your zodiac sign is taurus and that symbol is bull");
   }

   else if((month == 5 && day >= 21 && day <= 31) || (month == 6 && day <=20 && day >= 1 ))
   {
    printf("your zodiac sign is gemini and that symbol is Twins");
   }

   else if((month == 6 && day >= 21 && day  <= 30)|| (month == 7 && day <= 22 && day >= 1 ))
   {
    printf("your zodiac sign is cancer and that symbol is Crab");
   }

   else if ((month == 7 && day >=23 && day <= 31) || (month == 8 && day <= 22 && day >= 1))
   {
    printf("your zodiac sigh is Leo and that symbol is Lion ");
   }

   else if((month == 8 && day >= 23 && day <= 31) || (month == 9 && day <= 22 && day >= 1 && day >= 1))
   {
    printf("your zodiac sign is virgo and that symbol is the virgin");
   }

   else if((month == 9 && day >=23 && day <= 30) || (month == 10 && day <= 22 && day >= 1))
   {
    printf("your zodiac sign is Libra and that symbol is the Scales");
   }

   else if ((month == 10 && day >= 23 && day <= 31) || (month == 11 && day <= 21 && day >= 1)) 
   {  
    printf("your zodiac sign is scorpio and that symbol is the Scorpio");
   }

   else if((month == 11 && day >=22 && day <= 30) || (month == 12 && day <= 21 && day >= 1))
   {
    printf("your zodiac sign is Sagittarius and that symbol is the Archer");
   }

   else if ((month == 12 && day >= 22 && day <= 31) || (month == 1 && day <= 19 && day >= 1))
   {
    printf(" your zodiac sign is capricon and that symbool is the Goat ");
   }

   else if((month == 1 && day >= 20 && day <= 31) || (month == 2 && day <= 18 && day >= 1))
   {
    printf("your zodiac sign is Aquarius and that symbol is the Water Bearer");
   }

   else if((month == 2 && day >= 19 && day <= 29 ) || (month == 3 && day <= 20 && day >= 01))
   {
    printf("your zodiac sign is Pisces and that symbol is the Fishes");
   }

        
     }
   
   printf("\nthanks for visit ");
}