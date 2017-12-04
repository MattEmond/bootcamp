# In this file we define the methods to help filter out candidates
# This way, we keep these methods separated from other potential parts of the program

def find(id)
  @candidates.each do |candidate|
    return candidate if id == candidate[:id]
  end
  nil
end

def experienced?(candidate)
  candidate[:years_of_experience] >= 2
end

def qualified_candidates(candidates)
  candidates.select do |candidate|
    experienced?(candidate) && github?(candidate) && ruby_or_python?(candidate) && application?(candidate) && age?(candidate)
  end
end

# More methods will go below


def github?(candidate)
  candidate[:github_points] >= 100
end

def ruby_or_python?(candidate)
  ["Python", "Ruby"].include? candidate[:languages]
end

def application?(candidate)
  candidate[:date_applied] < 15.day.ago.to_date
end

def age?(candidate)
  candidate[:age] > 17
end


def ordered_by_qualifications(candidates)
  candidates.sort_by do |a,b|
    a[:years_of_experience] <=> b[:years_of_experience]
    if a == b
      a[:github_points] <=> b[:github_points]
    end 
  end
end
