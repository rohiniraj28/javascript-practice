function getlift(L1,L2,R){
    const distanceL1 = Math.abs(L1-R);
    const distanceL2 = Math.abs(L2-R);

    if (distanceL1 < distanceL2){
        return 'L1 will reach first';
    } else if (distanceL2 < distanceL1){
        return 'L2 will reach first';
    } else {
        return 'both L1 & L2 reach same time';
    }
    
}
L1 = 8;
L2 = 10;
R = 9;
console.log(getlift(L1, L2, R));
