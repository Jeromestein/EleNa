from abc import ABC, abstractmethod


class RoutingStrategy(ABC):
    def __init__(self, currMap, percentage, method):
        self.currMap = currMap
        self.percentage = percentage
        self.method = method

    @abstractmethod
    def getRoute(self, src, max):
        pass
