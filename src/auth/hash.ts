import * as bcrypt from 'bcrypt';

export const hashPasswd = async (passwd: string): Promise<string> => {
    const SALT = 10;

    return new Promise((resolve, reject) => bcrypt.hash(passwd, SALT, function(err, hash) {
        if (err) {
            reject(err);
        }

        resolve(hash);
    }));
}

export const compareHash = async (passwd: string, hash: string): Promise<boolean> => {
    return new Promise((resolve, reject) => bcrypt.compare(passwd, hash, function(err, result) {
        if (err) {
            reject(err);
        }
        resolve(result);
    }));
}