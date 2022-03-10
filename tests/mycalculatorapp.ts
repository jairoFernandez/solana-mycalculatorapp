import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Mycalculatorapp } from "../target/types/mycalculatorapp";

describe("mycalculatorapp", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.Mycalculatorapp as Program<Mycalculatorapp>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
