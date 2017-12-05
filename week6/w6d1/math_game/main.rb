require './questions.rb'
# require './players.rb'


class GameManager

  attr_reader :answer

  def initialize
    @score = 0
    @questions = []
  end

  def run
    game = true
    while game do
      newQuestion = Question.new
      q = newQuestion.question_string
      @questions << q
      puts q
      answer = $stdin.gets.chomp

    if (answer == "q")
      puts "Total score: #{score}"
      break
    end

      if (q.correct?(answer.to_i))
        @score += 1
        puts "Correct!"
      else
        puts "Wrong"
      end
    end
  end
end

game = GameManager.new
game.run
