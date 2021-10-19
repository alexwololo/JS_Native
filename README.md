# JS_Native

<!--
Expand on the solution from the previous task so that aces can be worth 1 or 11, depending on which is most favorable to the player. What is most favorable for the player is that which means that the score does not exceed 21, if possible.

The examples from the previous task also apply here. Some other examples:

score ([{suit: 'HEARTS', value: 1}]) should return 11
score ([{suit: 'HEARTS', value: 11}, {suit: 'HEARTS', value: 1}]) should return 21
score ([{suit: 'HEARTS', value: 1}, {suit: 'SPADES', value: 1}, {suit: 'DIAMONDS', value: 1}]) should return 13
score ([{suit: 'HEARTS', value: 1}, {suit: 'SPADES', value: 1}, {suit: 'DIAMONDS', value: 1}, {suit: 'CLUBS', value: 1} ]) shall return 14 -->


A♥,2♥,3♥,4♥,5♥,6♥,7♥,8♥,9♥,T♥,J♥,Q♥,K♥
A♥,2♥,3♥,4♥,5♥,6♥,7♥,8♥,9♥,T♥,J♥,K♥,Q♥

A♠,2♠,3♠,4♠,5♠,6♠,7♠,8♠,9♠,T♠,J♠,Q♠,K♠
A♠,2♠,3♠,4♠,5♠,6♠,7♠,8♠,9♠,T♠,J♠,K♠,Q♠

A♦,2♦,3♦,4♦,5♦,6♦,7♦,8♦,9♦,T♦,J♦,Q♦,K♦
A♦,2♦,3♦,4♦,5♦,6♦,7♦,8♦,9♦,T♦,J♦,K♦,Q♦

A♣,2♣,3♣,4♣,5♣,6♣,7♣,8♣,9♣,T♣,J♣,Q♣,K♣
A♣,2♣,3♣,4♣,5♣,6♣,7♣,8♣,9♣,T♣,J♣,K♣,Q♣
