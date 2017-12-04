# In this file we define the methods to help filter out candidates
# This way, we keep these methods separated from other potential parts of the program

def find(id)
  id.each do |candidate|
    if id == @candidate
      candidate
    else
      nil
  end
end

def experienced?(candidate)
  years_of_experience: >= 2
end

def qualified_candidates(candidates)
  candidates.each do |candidate|
    if candidate experienced? && github? && ruby_or_python? && application? && age?
      candidate
  end
end

# More methods will go below


def github?(candidate)
  github_points: >= 100
end

def ruby_or_python?(candidate)
  languages:.include?("Python" || "Ruby")
end

def application?(candidate)
  date_applied: < 15.day.ago.to_date
end

def age?(candidate)
  age: > 17
end


def ordered_by_qualifications(candidates)
  candidates.sort_by {|exp| @candidates.years_of_experience}
end
