actor{

    // Challenge 1
    public func add(n : Nat, m : Nat) : async Nat {
    return(n + m);
  };

    //Challenge 2
  public func square (n : Nat) : async Nat {
    return(n * n); 
  };

    //Challenge 3
  public func days_to_seconds (n : Nat) : async Nat {
    return(n * 24 * 60 * 60);
  };

    //Challenge 4
    //var designates mutable, let designates immutable
    //therefore below is a "Creating a mutable variable," one that can change
    //if I set "counter := 50 ;" the counter will start at 50. Also, placement of this command in code is important. Remember: place below to set (50) in stone, place above to flow (50+n). This is because deployment scans topdown a single time. 
  var counter : Nat = 0;
    // counter variable increases by n input / ":=" symbol means counter is redefined by opposing equation
  public func increment_counter(n : Nat) : async Nat {
    counter := counter + n;
    return (counter);
  };
  public func clear_counter() : async Text {
    counter := 0;
    return ("The counter has been reset.");
  };


}