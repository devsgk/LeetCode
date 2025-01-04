class Solution:
  def predictPartyVictory(self, senate: str) -> str:
    radiants = deque([i for i in range(0, len(senate)) if senate[i] == "R" ])
    dires = deque([i for i in range(0, len(senate)) if senate[i] == "D"])
    index = len(senate)

    while len(radiants) and len(dires):
      if radiants[0] < dires[0]:
        radiants.append(index)
      else:
        dires.append(index)

      radiants.popleft()
      dires.popleft()
      index += 1

    return "Radiant" if radiants else "Dire"
