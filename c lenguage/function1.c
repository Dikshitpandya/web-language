// write a program to calculate bmi accept height in foot inch and also display user catgor
// bmi = weight / height * height
// foot-meter = foot /3.281
// inch-meter = inch / 39.37 
#include<stdio.h>
float getfoot( float foot)
{
    
    float answer =0;
    answer = foot / 3.281;
    return answer;
}
float  getinch( float inch)
{
     float answer =0;
     answer = inch / 39.37;
     return answer;
}
float getbmi( float bmi)
{
    if( bmi <= 16.0)
    {
        printf("\nyour body is servere thinkness");
    }
    if(bmi >=16 && bmi <= 17)
    {
        printf("\nyour body is moderate thinness");
    }
    if(bmi >=17.0 && bmi <=18.5)
    {
        printf("\nyour body is mild thinness");
    }
    if(bmi >=18.5 && bmi <=25.0)
    {
        printf("\nyour body is normal");
    }
    if(bmi >=25.0 && bmi <=30.0)
    {
        printf("\nyour body is overweight");
    }
    if(bmi >=30.0 && bmi<=35.0)
    {
        printf("\nyour body is obese class1");
    }
    if(bmi >=35.0 && bmi <=40.0)
    {
        printf("\nyour body is obese class2");
    }
    if(bmi >=40)
    {
        printf("\nyour body is obese class3");
    }
    
}

void main()
{
    float weight =0 ;
    float foot ,inch; 
    float bmi =0, height;
    float flash ,temp ;

    printf("enter your weight ");
    scanf("%f",&weight);
    printf("enter your height in foot");
    scanf("%f",&foot);
    printf("enter your height in inch");
    scanf("%f",&inch);
    flash = getfoot(foot);

    printf("foot meter = %f",flash);
    temp = getinch(inch);
    printf("foot inch = %f",temp);

    height = flash + temp;
    printf("\nyour height in meter is %f",height);

    bmi = weight /(height *height);
    printf(" bmi = %f",bmi);

    getbmi(bmi);
    printf("\n goodbye");
}