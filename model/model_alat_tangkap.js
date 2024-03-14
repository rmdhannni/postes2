var connection = require("../config/db");

class model_alat_tangkap{

    static async getALL(){
        return new Promise((resolve, reject) => {
            connection.query(
                "select * from alat_tangkap ORDER BY id_alat_tangkap DESC",
                function (err, rows) {
                  if (err) {
                    reject(err);
                  } else {
                    resolve(rows);
                  }
                }
              );
        });
    }
    
    static async Store(Data){
        return new Promise((resolve, reject) => {
            connection.query('insert into alat_tangkap set ?', Data, function(err, result){
                if (err){
                    reject(err);
                    console.log(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
    
    static async getId(id){
        return new Promise((resolve, reject) => {
            connection.query('select * from alat_tangkap where id_alat_tangkap = ' + id , (err, rows) => {
                if (err){
                    reject(err);
                    console.log(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

      static async update(id, data){
          return new Promise((resolve, reject) => {
              connection.query('update alat_tangkap set ? where id_alat_tangkap =' + id, data, function(err, result){
                  if (err){
                      reject(err);
                      console.log(err);
                  } else {
                      resolve(result);
                  }
              });
          });
      }
      
      static async delete(id, data){
          return new Promise((resolve, reject) => {
              connection.query('delete from alat_tangkap where id_alat_tangkap =' + id, function(err, result){
                  if (err){
                      reject(err);
                  } else {
                      resolve(result);
                  }
              });
          });
      }
    

}


module.exports = model_alat_tangkap;