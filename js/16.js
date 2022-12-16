var n = parseInt(prompt("Enter the Number"));
    even=0
	odd=0
	while(n>0)
	{
		var rem = n%10
		if (rem%2==0)
		{	
			even=even+rem;
		}
		else
		{
			odd=odd+rem;
		}
		n = (n-rem)/10;		
    }
	console.log(even,odd);