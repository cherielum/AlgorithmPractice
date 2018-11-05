class ChangeCounter():

    def count_change(self, balance):
        """Returns the smallest set of coins that
        equal the change requested

        change is in cents

        >>> counter = ChangeCounter()

        >>> counter.count_change(0.00)
        []

        >>> counter.count_change(1)
        ['penny']

        >>> counter.count_change(2)
        ['penny', 'penny']

        >>> counter.count_change(75)
        ['quarter', 'quarter', 'quarter']

        >>> counter.count_change(42)
        ['quarter', 'dime', 'nickel', 'penny', 'penny']

        While loops are for when you don't know how many iterations
        while not plate_is_empty():
            take_a_bite()

        For loops are for when you're iterating over a known range, or list of things:
        for bite in bites_on_the_plate():
            eat_the_bite(bite)
        """


        coins = []
        while balance > 0:
            if balance >= 25:
                balance -= 25
                coins.append('quarter')
            elif balance >= 10:
                balance -= 10
                coins.append('dime')
            elif balance >= 5:
                balance -= 5
                coins.append('nickel')
            elif balance >= 1:
                balance -= 1
                coins.append('penny')

        return coins


if __name__ == "__main__":
    import doctest
    doctest.testmod()