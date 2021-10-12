using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using Tabloid.Models;
using Microsoft.Data.SqlClient;

namespace Tabloid.Repositories
{
    public class CategoryRepository : BaseRepository, ICategoryRepository
    {
        public CategoryRepository(IConfiguration config) : base(config) { }
        public List<Category> GetAll()
        {
            using ( var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT *
                                        FROM Category
                                        ORDER BY name";
                    var reader = cmd.ExecuteReader();

                    var categories = new List<Category>();

                    while (reader.Read())
                    {
                        categories.Add(new Category()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Name = reader.GetString(reader.GetOrdinal("name")),

                        });
                    }
                    reader.Close();
                    return categories;
                }
            }
        }
    }
}
