require 'pry';

class Station < DynamicModel
  attr_accessor :name, :line, :division, :latitude, :longitude
  attr_reader :id

  # these methods are private because they don't need to be used by anyone
  # except other methods within the class
  private

  def update_record
    sql = <<-SQL
      UPDATE stations
      SET name = ?, line = ?, division = ?, latitude = ?, longitude = ?
      WHERE id = ?
    SQL

    DB[:conn].execute(sql, self.name, self.line, self.division, self.latitude, self.longitude, self.id)
    self
  end

  def delete_record
    sql = <<-SQL
      DELETE FROM stations
      WHERE id = ?
    SQL

    DB[:conn].execute(sql, self.id)
    @id = nil
    self
  end

  # row is refering to the row in the DB, give us an instance to work with and 
  # instance_variable_set is giving an id because it comes back from SQL and
  # we don't have a attr_writer for it
  def self.new_from_row(station_row)
    station = self.new(station_row)
    station.instance_variable_set(:@id, station_row["id"])
    station
  end

  # receives a hash of attirbutes and builds a where clause
  # adding AND for each attribute
  def self.conditions_from_hash(attributes)
    attributes.inject([]) do |acc, (k,v)|
      acc.push("#{k} = ?")
    end.join(" AND ")
    # accumulator is returned a string of key = value pairs
    # joins them with an AND to form a coherent SQL statement
  end
end
