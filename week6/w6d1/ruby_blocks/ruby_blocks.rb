# Example 1 - Yielding invisible block

def print_result
  result_from_block = yield
  puts result_from_block
end

# This will print out the number 9 to the console
print_result { 3 * 3 }


# Blocks can also be written using the do...end format

print_result do
  creature = 'walrus'
  "I am the #{creature}"
end

# Check this out: blocks have access to variables outside of their definition
shopping_list = [:milk, :eggs, :cheese]
print_result do
  # select one at random
  imporant_item = shopping_list.sample
  "I hope I don't forget #{imporant_item}"
end



#Example 2 - Alternative Syntax

def print_result(&block)
  result_from_block = block.call()
  puts result_from_block
end
