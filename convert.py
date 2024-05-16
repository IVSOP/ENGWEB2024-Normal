import json

with open("contratos2024.json", "r", encoding='utf-8') as file:
	data = json.load(file)

contratos = []

for entry in data.get("contratos", []):
	contrato = {}
	#  se dataPublicacao nao for string, assumo o primeiro caso que referi em PR.md
	if not isinstance(entry["dataPublicacao"], str):
		entry["fundamentacao"] = entry["prazoExecucao"]
		entry["prazoExecucao"] = entry["dataPublicacao"]
		entry["dataPublicacao"] = entry["nAnuncio"]
		entry["tipoprocedimento"] = ''

	# senao, se preco for string e invalido ( = 0)
	elif isinstance(entry["precoContratual"], str):
		entry["precoContratual"] = 0
	
	if '/' in entry["nAnuncio"]:
		entry["nAnuncio"] = ""

	try:
		x, y = entry["objectoContrato"].split('/')
		entry["objectoContrato"] = int(x)
	except Exception:
		print() # idk

	contratos.append(entry)

with open("contratos2024_new.json", "w", encoding='utf-8') as file:
	for pessoa in contratos:
		json.dump(pessoa, file, ensure_ascii=False, indent=4)