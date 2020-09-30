describe('Calculator', () => {
    // test for add() method in calculator class
    describe('#add', () => {
        describe('when passed a string as a number', () => {
            it('should throw an error', () => {
                const calculator = new Calculator();

                expect(() => calculator.add('1', 2)).toThrow();
                expect(() => calculator.add(1, '2')).toThrow();

                // without an arrow function, the test is not failing, the function itself is throwing an error
                // expect(calculator.add('1', 2)).toThrow();
                // expect(calculator.add(1, '2')).toThrow();
            });
        });
    })

    describe('#subtract', () => {
        describe('when passed a string as a number', () => {
            it('should throw an error', () => {
                const calculator = new Calculator();

                expect(() => calculator.subtract('1', 2)).toThrow();
                expect(() => calculator.subtract(1, '2')).toThrow();
            })
        })
    })

    describe('#multiply', () => {
        describe('when passed a string as a number', () => {
            it('should throw an error', () => {
                const calculator = new Calculator();

                expect(() => calculator.multiply('1', 2)).toThrow();
                expect(() => calculator.multiply(1, '2')).toThrow();
            })
        })
    })

    describe('#divide', () => {
        describe('when passed a string as a number', () => {
            it('should throw an error', () => {
                const calculator = new Calculator();

                expect(() => calculator.divide('1', 2)).toThrow();
                expect(() => calculator.divide(1, '2')).toThrow();
            })
        })
        describe('when passed y as zero', () => {
            it('should throw an error', () => {
                const calculator = new Calculator();

                expect(() => calculator.divide(1, 0)).toThrow();
            })
        })
    })

    // test for desired outcome (.not.toThrow())
    describe('when passed two numbers', () => {
        it('should not throw an error', () => {
            const calculator = new Calculator();

            expect(() => calculator.add(1, 2)).not.toThrow();
        });

        it('should add the numbers together', () => {
            const calculator = new Calculator();
            const result = calculator.add(1, 2);

            expect(result).toBe(3);
        });
    });
});