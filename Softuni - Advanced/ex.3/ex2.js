function constructionCrew (input){
    
    if(input.dizziness === true){
        input.levelOfHydrated += input.experience * input.weight *0.1;
        input.dizziness = false;
        return input;
    }
    return input;

}
constructionCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true });