const {
    clickElement
  } = require("./lib/commands.js");
  let page;
  beforeEach(async() => {
    page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
  });
  afterEach(() => {
    page.close();
  });
  describe("tests", () => {
    beforeEach(async() => {
        page = await browser.newPage();
        await page.goto("https://qamid.tmweb.ru/client/index.php");
        await clickElement(page, "body > main > section:nth-child(1) > div:nth-child(2) > ul > li:nth-child(3) > a");
    });
    test("Book one ticket", async() => {
        await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(11) > span:nth-child(4)");
        await clickElement(page, "body > main > section > button");
        await clickElement(page, "body > main > section > div > button");
        const actual = page.url();
        const expected = "https://qamid.tmweb.ru/client/ticket.php";
        expect(actual).toContain(expected);
    });
    test("Book multiple tickets'", async() => {
        await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(11) > span:nth-child(5)");
        await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(11) > span:nth-child(6)");
        await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(11) > span:nth-child(7)");
        await clickElement(page, "body > main > section > button");
        await clickElement(page, "body > main > section > div > button");
        const actual = page.url();
        const expected = "https://qamid.tmweb.ru/client/ticket.php";
        expect(actual).toContain(expected);
    });
    test("The book button is not available", async() => {
        await clickElement(page, "body > main > section > button");
        const actual = page.url();
        const expected = "https://qamid.tmweb.ru/client/hall.php";
        expect(actual).toContain(expected);
    });
  });