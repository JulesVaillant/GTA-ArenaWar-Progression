def ArenaTotal(level):
    return 5*level*level + 45*level

RewardsList = ["Taxi", "Dozer", "Clown Van", "Trashmaster", "Barracks Semi", "Mixer", "Space Docker", "Tractor"]
LevelsList = [25,50,75,100,200,300,500,1000]

if __name__ == '__main__':
    level = input("What level are you? ")
    print("You got: " + str(ArenaTotal(int(level))) + " AP")
    print('-' * 40)
    print('{:<20s}{:>1s}'.format("REWARD","COMPLETION (%)"))
    print('-' * 40)
    for i in range(len(RewardsList)):
        completion = ArenaTotal(int(level)) / ArenaTotal(LevelsList[i])*100  #completion of reward in %
        rounded = round(completion,2)
        if(rounded > 100):
            rounded = 100
        print('{:<20s}{:>4.2f}'.format(RewardsList[i],rounded))


