
---
id: 2024-08-28-0
titolo: Come Dare un Nome a una Istanza EC2 in AWS CloudFormation
featured: true
autore: ProfMancusoa
data: 2024-08-28
cover: cover.webp
introduzione: Analizziamo la tecnica per assegnare un nome ad un istanza EC2 in un template AWS CloudFormation
pubblicato: true
sezione: Blog
categorie:
  - AWS
  - Cloud
  - CloudFormation
  - Automation
  - IaC
  - DevOps
---

AWS CloudFormation è un servizio che consente di modellare e configurare risorse AWS risorse tramite un template testuale.
Questo servizio permette di implementare il paradigma `Infrastructure as Code`.

Un template base per creare un istanza EC2 tramite CloudFormation è il seguente

```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: AWS CloudFormation EC2 Template
Resources:
  SG-Mia-EC2:
    Type: AWS::EC2::SecurityGroup
    Properties:
      GroupDescription: Apre la porta HTTPS 443
      GroupName: SG-Mia-EC2
      SecurityGroupIngress:
      - IpProtocol: tcp
        FromPort: '443'
        ToPort: '443'
        CidrIp: 0.0.0.0/0
  EC2-Mia-EC2:
    Type: AWS::EC2::Instance
    Properties:
      ImageId: ami-0c318278dac68c29a
      InstanceType: t3.micro
      SecurityGroups:
      - Ref: SG-Mia-EC2
````

Questo template, una volta eseguito da CloudFormation, crea un'istanza virtuale EC2 con un security group chiamato *SG-Mia-EC2*.
Tuttavia l'istanza EC2 non avrà un nome specifico e nella console di AWS, nella colonna nome non apparirà nulla. 

Questi di per se non è un problema, ma se abbiamo più di una EC2 nella nostra regione non sarà possibile le varie VM dal proprio nome.

In questo scenario può risultare utile assegnare un nome predeterminato all'istanza EC2 in modo da poterla riconoscere facilmente accedendo alla console AWS.

Tuttavia non è possibile specificare un campo nome o simile nella configurazione dell'istanza.
AWS CloudFormation, tuttavia, ci permette di assegnare il nome ad un istanza attraverso l'uso dei `Tag`. Basta creare un tag con chiave *Name* e con valore il nome proprio dell'istanza EC2.

```yaml
Tags:
  - Key: "Name"
    Value: "NomeDellaMiaIstanza"  # Sostituisci con il nome desiderato
````

Vediamo come modificare il template per specificare un nome per la EC2


```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: AWS CloudFormation EC2 Template
Resources:
  SG-Mia-EC2:
    Type: AWS::EC2::SecurityGroup
    Properties:
      GroupDescription: Apre la porta HTTPS 443
      GroupName: SG-Mia-EC2
      SecurityGroupIngress:
      - IpProtocol: tcp
        FromPort: '443'
        ToPort: '443'
        CidrIp: 0.0.0.0/0
  EC2-Mia-EC2:
    Type: AWS::EC2::Instance
    Properties:
      ImageId: ami-0c318278dac68c29a
      InstanceType: t3.micro
      SecurityGroups:
      - Ref: SG-Mia-EC2
      Tags:
        - Key: "Name"
          Value: "Mia-EC2"
````

Come visto assegnare un nome ad un'istanza EC2 tramite un template CloudFormation è facilissimo e veloce. In tal modo quando accederemo alla nostra console AWS avremo tutte le informazioni per le nostre istanze e potremo identificarle facilemente.

