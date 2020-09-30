describe('canBuyBeer', () => {
    describe('when age is over 17', () => {
        it('should return true', () => {
            expect(canBuyBeer(21)).toBe(true);
        })
    })

    describe('when age is under 18', () => {
        it('should return false', () => {
            expect(canBuyBeer(16)).toBe(false);
        })
    })

    describe('canGregBuyBeer', () => {
        describe('when greg is 18', () => {
            it('should return "Greg is 18, he can buy beer!"', () => {
                const originalAge = greg.age
                greg.age = 18

                const result = canGregBuyBeer();

                expect(result).toBe('Greg is 18, he can buy beer!')
                greg.age = originalAge
            })
        })

        describe('when greg is 15', () => {
            it('should return "Greg is 15, no beer!"', () => {
                const originalAge = greg.age
                greg.age = 15

                const result = canGregBuyBeer();

                expect(result).toBe('Greg is 15, he can\'t buy beer :(')
                greg.age = originalAge
            })
        })
    })
})