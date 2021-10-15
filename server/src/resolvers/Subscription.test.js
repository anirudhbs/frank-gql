const rewire = require("rewire")
const Subscription = rewire("./Subscription")
const newLinkSubscribe = Subscription.__get__("newLinkSubscribe")
const newVoteSubscribe = Subscription.__get__("newVoteSubscribe")
// @ponicode
describe("newLinkSubscribe", () => {
    test("0", () => {
        let param2 = [[0, -5.48, -5.48], [0, 1, 100], [-5.48, -5.48, 100]]
        let callFunction = () => {
            newLinkSubscribe("Becky Bednar", param2, { prisma: { $subscribe: { link: () => "https://croplands.org/app/a/confirm?t=" } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param2 = [[100, -100, -5.48], [1, -100, 0], [0, -5.48, 100]]
        let callFunction = () => {
            newLinkSubscribe("Gail Hoppe", param2, { prisma: { $subscribe: { link: () => "http://www.example.com/route/123?foo=bar" } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param2 = [[100, 100, 1], [1, -100, -5.48], [1, 100, 1]]
        let callFunction = () => {
            newLinkSubscribe("Gail Hoppe", param2, { prisma: { $subscribe: { link: () => "www.google.com" } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param2 = [[1, 1, -100], [0, -100, -5.48], [-100, 1, -5.48]]
        let callFunction = () => {
            newLinkSubscribe("Becky Bednar", param2, { prisma: { $subscribe: { link: () => "https://croplands.org/app/a/reset?token=" } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param2 = [[-100, 100, 0], [-100, 1, 100], [-5.48, -100, -5.48]]
        let callFunction = () => {
            newLinkSubscribe("Maurice Purdy", param2, { prisma: { $subscribe: { link: () => "https://croplands.org/app/a/confirm?t=" } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            newLinkSubscribe(undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("newVoteSubscribe", () => {
    test("0", () => {
        let param2 = [[0, 100, -100], [-5.48, 0, 100], [0, -100, 100]]
        let callFunction = () => {
            newVoteSubscribe("Gail Hoppe", param2, { prisma: { $subscribe: { vote: () => false } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param2 = [[-100, -100, 100], [-100, 100, 1], [0, 1, 100]]
        let callFunction = () => {
            newVoteSubscribe("Janet Homenick", param2, { prisma: { $subscribe: { vote: () => false } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param2 = [[100, -5.48, 100], [1, 1, 100], [-5.48, 0, 100]]
        let callFunction = () => {
            newVoteSubscribe("Gail Hoppe", param2, { prisma: { $subscribe: { vote: () => false } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param2 = [[-100, -100, 100], [1, -5.48, 1], [0, -5.48, -100]]
        let callFunction = () => {
            newVoteSubscribe("Ronald Keeling", param2, { prisma: { $subscribe: { vote: () => false } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param2 = [[0, 0, 100], [100, -5.48, 100], [1, -5.48, 0]]
        let callFunction = () => {
            newVoteSubscribe("Ronald Keeling", param2, { prisma: { $subscribe: { vote: () => true } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            newVoteSubscribe(undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
