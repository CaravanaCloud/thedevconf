import redis
import json
import sys

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
    print(f"{prop_id},{event},{lang},{title},{status},{name},{email}")

def ingest_speakers(rconn):
    result = {}
    all_speakers = rconn.hgetall("Speaker")
    for key, value in all_speakers.items():
        speak = json.loads(value)
        uuid = speak.get("uuid")
        name = speak.get("name")
        email = speak.get("email")
        result[uuid] =  (name,email)
    return result
    
def cfp2csv():
    #print("Exporting CFP data to CSV")
    # Conectar no Redis
    rconn = redis.Redis(host='localhost', port=6379, db=0)
    result = None
    speakers = ingest_speakers(rconn)
    ingest_proposals(rconn,result,speakers)
    # Escever no csv
    # output_csv(result)
    
if __name__ == "__main__":
    cfp2csv()