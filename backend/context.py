class Context:
    def __init__(self, strategy):
        self._strategy = strategy

    @property
    def strategy(self):
        return self._strategy

    @strategy.setter
    def strategy(self, strategy):
        self._strategy = strategy

    def getStrategyRoute(self, src, goal, weight='length') -> None:
        return self._strategy.getRoute(src, max)

