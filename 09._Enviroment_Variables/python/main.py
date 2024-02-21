from dotenv import dotenv_values, load_dotenv

#Example1
enviroment_variables = dotenv_values()
print(enviroment_variables["MYSQL_PASSWORD"])

#Example2
import os

load_dotenv()
print(os.getenv("MYSQL_PASSWORD"))