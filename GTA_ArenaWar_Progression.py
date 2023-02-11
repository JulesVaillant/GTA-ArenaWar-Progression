def ArenaTotal(level):
    return 5*level*level + 45*level
     
def HoursLeft(APperHour, level):
    hours = []
    for i in range(len(RewardsList)):
        hours.append((ArenaTotal(LevelsList[i]) - ArenaTotal(level))/APperHour)
        if(hours[i] < 0):
            hours[i] = 0
    return hours


RewardsList = ["Taxi", "Dozer", "Clown Van", "Trashmaster", "Barracks Semi", "Mixer", "Space Docker", "Tractor"]
LevelsList = [25,50,75,100,200,300,500,1000]

if __name__ == '__main__':
    try:
        level = int(input("What level are you? (0 by default)"))
    except ValueError:
        level = 0
    try:
        APperHour = int(input("How much AP per hour do you make? (3k by default)"))
    except ValueError:
        APperHour = 3000
    HoursList = HoursLeft(APperHour, level)
    print("You got: " + str(ArenaTotal(level)) + " AP")
    print('-' * 60)
    print('{:<20s}{:>1s}{:>18s}'.format("REWARD","COMPLETION (%)", "HOURS LEFT"))
    print('-' * 60)
    for i in range(len(RewardsList)):
        completion = ArenaTotal(level) / ArenaTotal(LevelsList[i])*100  #completion of reward in %
        rounded = round(completion,2)
        if(rounded > 100):
            rounded = 100
        print('{0:<20s}{1:^06.2f}{2:>24.2f}'.format(RewardsList[i],rounded,HoursList[i]))





