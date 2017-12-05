class Question

  def initialize
    @leftOperand = 1 + rand(100)
    @rightOperand = 1 + rand(100)
  end

  def question_string
    "What is #{@leftOperand} + #{@rightOperand}"
  end

  def correct?(answer)
    @answer == answer
  end

  def addition_question
    @answer = @leftOperand + @rightOperand
  end

end

# newQuestion = Question.new
# puts newQuestion.question_string
