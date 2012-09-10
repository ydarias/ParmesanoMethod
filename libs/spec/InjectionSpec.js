describe("Injection", function() {
	
	describe("when it have two instances", function() {

		var injection1 = new Injection();
		var injection2 = new Injection();

		it("both should be the same (singleton)", function() {
			expect(injection1).toBe(injection2);
		});

		it("both should have same properties", function() {
			injection1.tutu = "tutu";
			expect(injection2.tutu).toBe("tutu");
		});

	});

    describe("when used into an application", function() {

        var injection = new Injection();

        function Tutu() {};

        it("should register new instances", function() {
            injection.register("tutu", Tutu);
            expect(injection.registry.tutu).toBeDefined();
        });

        function Boo(argument) {
            this.spy = argument;
        }

        it("should register new instances with one argument constructor", function() {
            injection.register("boo", Boo, 'boo');
            expect(injection.registry.boo.spy).toBe('boo');
        });

        function Foo() {
            this._dependencies_ = ['tutu'];
        }

        it("should resolve new instances dependencies", function() {
            injection.register("foo", Foo);
            expect(injection.registry.foo.tutu).toBeDefined();
        });

        it("should throw exception when a dependecy is not resolved", function() {

            function Titi() {
                this._dependencies_ = ['dep'];
            }

            expect(function() {
                injection.register("titi", Titi);
            }).toThrow(new Error("Dependecy dep is not registered"));
        });

    });
	
});