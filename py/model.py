#model checking

import itertools

n=int(input( 'enter the no.of variables:'))
#possibilities=list(itertools.product([True,False],repeat=n))
possibilities=list(itertools.product([True,False],repeat=n))
temp=False

if n==3:
    for i in range(len(possibilities)):
        A=possibilities[i][0]
        B=possibilities[i][1]
        C=possibilities[i][2]
        condition1=A or B
        condition2=(not A) == (not B or C)
        condition3=not A or not B or C
        if condition1 and condition2 and condition3:
            temp=True
            print('KB is satisfied')
            print(f'({A},{B},{C})')
elif n==4:
     for i in range(len(possibilities)):
        A=possibilities[i][0]
        B=possibilities[i][1]
        C=possibilities[i][2]
        D=possibilities[i][3]
        condition1=C==(B or D)
        condition2=(not A) == (not B or C)
        condition3=B and not C  or  A
        condition4=D or C
        if condition1 and condition2 and condition3 and condition4:
            temp=True
            print('KB is satisfied')
            print(f'({A},{B},{C},{D})')

if temp==False:
    print('assignmnet not possible')