variable "ami-id" {
  type = string
}

variable "iam-instance-profile" {
  default = ""
  type    = string
}

variable "instance-type" {
  default = "t2.micro" // free for first 12 months by AWS
  type    = string
}

variable "name" {
  type = string
}

variable "key-pair" {
  type = string
}

variable "private-ip" {
  default = ""
  type    = string
}

variable "subnet-id" {
  default = ""
  type    = string
}

variable "vpc-security-group-ids" {
  default = []
  type    = list(string)
}
