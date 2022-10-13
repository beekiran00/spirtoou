const consola = require("consola");
const Console = require("Console");
const log = require("ololog");
log.configure({ time: true, locate: false }); //to add log times

function ConsoleLogTests() {
  return (
    <>
      <h1>Console Log Tests</h1>

      {/* Consola */}
      <div>
        <button
          onClick={() => {
            consola.success("This is a success message");
            consola.info("Give me some Info");
            consola.error("I am not good because I am an error");
            consola.silent("I am not going to be silent");
            consola.fatal("I am fatal");
            consola.warn("Warning consola ahead");
            consola.log("logging out this message");
            consola.ready("I am ready to log");
            consola.start("lets start using consola");
          }}
        >
          Consola
        </button>
      </div>

      {/* Console */}
      <div>
        <button
          onClick={() => {
            let stringData = "Hello this is Manish";

            Console.log(stringData);
            Console.debug(stringData);
            Console.error(stringData);
            Console.warn(stringData);
            Console.stress(stringData);
            Console.success(stringData);
          }}
        >
          Console
        </button>
      </div>

      {/* Odolog */}
      <div>
        <button
          onClick={() => {
            log("This is default ololog message");
            log.italic("Styled with Itlaic");
            log.bgCyan("This message is wraped in background color");
            log.green("This message has green color");
            log.red.underline("This is a underline message in red color");
            log.yellow.bright.italic.underline("Multiple styles combined");
            log("This is my object:", { foo: 10, bar: 20, qux: 30 });
          }}
        >
          Odolog
        </button>
      </div>
    </>
  );
}

export default ConsoleLogTests;
