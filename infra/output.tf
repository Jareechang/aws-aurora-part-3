output "ecr_repo_url" {
  value = "${data.aws_caller_identity.current.account_id}.dkr.ecr.${var.aws_region}.amazonaws.com"
}

output "ecr_repo_path" {
  value = aws_ecr_repository.main.name
}

output "aws_region" {
  value = var.aws_region
}

output "aws_iam_access_id" {
  value = module.ecr_ecs_ci_user.aws_iam_access_id
}

output "aws_iam_access_key" {
  value = module.ecr_ecs_ci_user.aws_iam_access_key
}

output "alb_url" {
  value = module.alb.lb.dns_name
}

output "aurora_cluster_endpoint" {
  value = aws_rds_cluster_endpoint.static.endpoint
}

output "bastion_ip" {
  value = aws_instance.bastion.public_ip
}

output "bastion_environment" {
  value = templatefile("./bastion-environment.tftpl", {
    db_host = [for i, instance in aws_rds_cluster_instance.cluster_instances : instance if instance.writer == true][0].endpoint
    ssm_db_param_path = aws_ssm_parameter.db_password.name
    db_username = local.db_username
    db_name = local.db_name
    s3_bucket = aws_s3_bucket.bucket.id
  })
}
