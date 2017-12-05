class Players

  attr_reader :name
  def initialize(name)
    @name = name
  end

end

@player1 = Players.new('Player 1')
@player2 = Players.new('Player 2')
puts player1.name, player2.name
