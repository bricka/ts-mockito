import {AnyNumberMatcher} from "../../../src/matcher/type/AnyNumberMatcher";
import {anyNumber, instance, mock, verify} from "../../../src/ts-mockito";

describe("AnyNumberMatcher", () => {
    describe("checking if positive number is matching", () => {
        it("returns true", () => {
            // given
            const testObj = new AnyNumberMatcher();

            // when
            const result = testObj.match(3);

            // then
            expect(result).toBeTruthy();
        });
    });

    describe("checking if negative number is matching", () => {
        it("returns true", () => {
            // given
            const testObj = new AnyNumberMatcher();

            // when
            const result = testObj.match(-3);

            // then
            expect(result).toBeTruthy();
        });
    });

    describe("checking if zero is matching", () => {
        it("returns true", () => {
            // given
            const testObj = new AnyNumberMatcher();

            // when
            const result = testObj.match(0);

            // then
            expect(result).toBeTruthy();
        });
    });

    describe("checking if string representation of number is matching", () => {
        it("returns false", () => {
            // given
            const testObj = new AnyNumberMatcher();

            // when
            const result = testObj.match("5");

            // then
            expect(result).toBeFalsy();
        });
    });

    describe("checking if object is matching", () => {
        it("returns false", () => {
            // given
            const testObj = new AnyNumberMatcher();

            // when
            const result = testObj.match({});

            // then
            expect(result).toBeFalsy();
        });
    });
});

describe("anyNumber", () => {
  describe("using in verify statements", () => {
    it("can be used for verifying", () => {
      class Foo {
        public add = (num1: number, num2: number): number => num1 + num2;
      }
      const foo = mock(Foo);
      instance(foo).add(1, 2);
      verify(foo.add(anyNumber(), anyNumber())).once();
    });
  });
});
