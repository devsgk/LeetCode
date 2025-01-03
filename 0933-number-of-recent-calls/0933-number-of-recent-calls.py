class RecentCounter:
  def __init__(self):
    self.history = []
    self.index = 0        

  def ping(self, t: int) -> int:
    self.history.append(t)

    while self.history[self.index] < t - 3000:
      self.index += 1
    
    return len(self.history) - self.index
        


# Your RecentCounter object will be instantiated and called as such:
# obj = RecentCounter()
# param_1 = obj.ping(t)