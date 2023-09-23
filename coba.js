function dataIPK(ips1 , ips2 , ips3){

    let result = (ips1 + ips2 + ips3)/3
    return result
}

 let namaMahasiswa = "santia isabela"
 let kelas = "TI22 J"
 let nim = 211401928

 let ipsSemester1 = 3.47
 let ipsSemester2 = 2.9 
 let ipsSemester3 = 3.5
 let totalSemester = dataIPK (ipsSemester1, ipsSemester2, ipsSemester3)

 console.log(`saya ${namaMahasiswa} nim saya ${nim} kelas saya ${kelas}`)
 console.log(`ipk selama 3 semester ${totalSemester}`)