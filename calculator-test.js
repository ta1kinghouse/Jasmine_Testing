
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 5,
    rate: 5,
  };
  expect(calculateMonthlyPayment(values)).toEqual('188.71');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 12345,
    years: 5,
    rate: 3.8
  };
  expect(calculateMonthlyPayment(values)).toBeCloseTo(226.24, 2);
});


