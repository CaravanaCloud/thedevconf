get_param () {
    curr_value="${!1}"
    if [ -z "$curr_value" ]
    then
        aws ssm get-parameter --name "$1" --query 'Parameter.Value' --output 'text'
    else
        echo "${curr_value}"
    fi  
}

end_script () {
    echo "done"
}