import redis
import json
import sys
import os


ingest_limit = sys.maxsize

def output_csv(result):
    # print(result)
    None

def ingest_proposals(rconn,result,speakers):
    count = 0
    all_proposals = rconn.hgetall("Proposals")
    for key, value in all_proposals.items():
        count += 1
        if count > ingest_limit:
            break
        prop = json.loads(value)
        print_csv(prop,speakers)

def print_csv(prop, speakers):
    prop_id = prop.get("id")
    event = prop.get("event")
    lang = prop.get("lang")
    title = prop.get("title")
    uuid = prop.get("mainSpeaker")
    speaker = speakers.get(uuid)
    if speaker:
        (name, email) = speaker
    else:
        (name, email) = ("??","???")
    status = prop.get("state",{}).get("code")
    #print("===")
    #print(prop)
    print(f"\"{prop_id}\",\"{event}\",\"{lang}\",\"{title}\",\"{status}\",\"{name}\",\"{email}\"")

def ingest_speakers(rconn):
    result = {}
    all_speakers = rconn.hgetall("Speaker")
    for key, value in all_speakers.items():
        speak = json.loads(value)
        uuid = speak.get("uuid")
        name = speak.get("firstName") + " " + speak.get("name")
        email = speak.get("email")
        result[uuid] =  (name,email)
    return result
    
def cfp2csv():
    #print("Exporting CFP data to CSV")
    # Conectar no Redis
    redis_host = os.getenv("REDIS_HOST", "localhost")
    redis_port = int(os.getenv("REDIS_HOST", 6379))
    redis_db = int(os.getenv("REDIS_DB", 0))
    redis_auth = os.getenv("REDIS_AUTH", "")
    rconn = redis.StrictRedis(host=redis_host, port=redis_port, db=redis_db, password = redis_auth)
    result = None
    speakers = ingest_speakers(rconn)
    ingest_proposals(rconn,result,speakers)
    # Escever no csv
    # output_csv(result)
    
if __name__ == "__main__":
    cfp2csv()