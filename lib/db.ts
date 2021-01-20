import mysql from 'serverless-mysql'

export const db = mysql({
  config: {
    host: 'remotemysql.com',
    database: 'AFQO5NsiCa',
    user: 'AFQO5NsiCa',
    password: 'nlXAQ32Wp1',
    /* host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD, */
  },
})

export async function query(
  q: string,
  values: (string | number)[] | string | number = []
) {
  try {
    const results = await db.query(q, values)
    await db.end()
    return results
  } catch (e) {
    throw Error(e.message)
  }
}
