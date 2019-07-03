class DynamicModel
  # initialize, called with instantiating a station, sets id to nil and performs
  # the mass assign attributes method mass assigns the attributes to the instance
  def initialize(attributes)
    @id = nil
    self.send(:mass_assign_attributes, attributes)
  end

  def self.column_names 
    sql = "PRAGMA table_info(#{self.table_name}) " 
    DB[:conn].execute(sql).map do | hash |
        hash['name']
    end.delete('id')
end

  def self.table_name
    self.to_s.downcase + 's'
  end

  # checks if the instance has an id, because if it does, that means it has already been
  # entered in db
  def save
    self.id.nil? ? self.send(:insert_record) : self.send(:update_record)
  end

  # mass assign happens again, updating any fields that have changed
  def update(attributes)
    self.send(:mass_assign_attributes, attributes)
    self.save
  end

# calls delete method
  def delete
    self.send(:delete_record)
  end

  def self.create(attributes)
    instance = self.new(attributes)
    instance.save
  end

  def self.all
    instance_rows = DB[:conn].execute("SELECT * FROM #{self.table_name}")
    # we need to create instances
    instance_rows.map do |instance_row|
      self.send(:new_from_row, instance_row)
    end
  end

    # executes SQL statement to find row (instance) by passed id
  def self.find(id)
    instance_row = DB[:conn].execute("SELECT * FROM #{self.table_name} WHERE id = ?", id)[0]
    if instance_row
      self.send(:new_from_row, instance_row)
    end
  end

  # takes a hash of any amount of attribute
  def self.find_by(attributes)
    conditions = conditions_from_hash(attributes)
    values = attributes.values
    sql = <<-SQL
      SELECT * from #{self.table_name}
      WHERE #{conditions}
    SQL
    instance_row = DB[:conn].execute(sql, *values)[0]
    if instance_row
      self.send(:new_from_row, instance_row)
    end
  end

 # find instance by id, delete it 
def self.delete(id)
    instance = self.find(id)
    instance.delete
end

private
  # setting attributes on the instance by invoking .name= , .latitude= , etc.
  # expects a hash
  def mass_assign_attributes(attributes)
    attributes.each do |k, v|
      setter_method = "#{k}="
      # .respond_to? Is it possible to call .{value} on this class instance?
      if self.respond_to?(setter_method)
        self.send(setter_method, v)
      end
    end
  end

  def insert_record
    column_names = self.class.column_names.join(" ,")
    values = column_names.map { |name| self.send(name.to_sym) }
    question_marks = column_names.map { "?" }.join(", ")
    sql = <<-ANYTHING
      INSERT INTO #{self.class.table_name} (#{column_names})
      VALUES (#{question_marks})
    ANYTHING

    DB[:conn].execute(sql, *values)
    @id = DB[:conn].execute("SELECT last_insert_rowid() FROM #{self.class.table_name}")[0][0]
    self
  end



end
